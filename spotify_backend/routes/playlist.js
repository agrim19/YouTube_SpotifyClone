const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

const router = express.Router();

// Route 1: Create a playlist
router.post(
    "/create",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const currentUser = req.user;
        const {name, thumbnail, songs} = req.body;
        if (!name || !thumbnail || !songs) {
            return res.status(301).json({err: "Insufficient data"});
        }
        const playlistData = {
            name,
            thumbnail,
            songs,
            owner: currentUser._id,
            collaborators: [],
        };
        const playlist = await Playlist.create(playlistData);
        return res.status(200).json(playlist);
    }
);

// Route 2: Get a playlist by ID
// we will get the playlist ID as a route parameter and we will return teh playlist having that id
// /something1/something2/something3 --> exact match
// /something1/something2/something4 --> this will not call the api on the previus line
// If we are doing /playlist/get/:playlistId (focus on teh :) --> this means that playlistId is now a variable to which we can assign any value
// If you call anything of the format /playlist/get/asdvniuen (asdvniuen can be anything), this api is called
// If you called /playlist/get/asdvniuen, the playlistId variable gets assigned teh value asdvniuen.
router.get(
    "/get/playlist/:playlistId",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // This concept is called req.params
        const playlistId = req.params.playlistId;
        // I need to find a playlist with the _id = playlistId
        const playlist = await Playlist.findOne({_id: playlistId});
        if (!playlist) {
            return res.status(301).json({err: "Invalid ID"});
        }
        return res.status(200).json(playlist);
    }
);

// Get all playlists made by an artist
// /get/artist/xyz
router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const artistId = req.params.artistId;

        // We can do this: Check if artist with given artist Id exists
        const artist = await User.findOne({_id: artistId});
        if (!artist) {
            return res.status(304).json({err: "Invalid Artist ID"});
        }

        const playlists = await Playlist.find({owner: artistId});
        return res.status(200).json({data: playlists});
    }
);

// Add a song to a playlist
router.post(
    "/add/song",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const currentUser = req.user;
        const {playlistId, songId} = req.body;
        // Step 0: Get the playlist if valid
        const playlist = await Playlist.findOne({_id: playlistId});
        if (!playlist) {
            return res.status(304).json({err: "Playlist does not exist"});
        }

        // Step 1: Check if currentUser owns the playlist or is a collaborator
        if (
            !playlist.owner.equals(currentUser._id) &&
            !playlist.collaborators.includes(currentUser._id)
        ) {
            return res.status(400).json({err: "Not allowed"});
        }
        // Step 2: Check if the song is a valid song
        const song = await Song.findOne({_id: songId});
        if (!song) {
            return res.status(304).json({err: "Song does not exist"});
        }

        // Step 3: We can now simply add the song to the playlist
        playlist.songs.push(songId);
        await playlist.save();

        return res.status(200).json(playlist);
    }
);

module.exports = router;
