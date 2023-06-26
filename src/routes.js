// Pages
import Home from "./pages/Home.svelte";

import Courses from "./pages/courses/Courses.svelte"
import CourseDetails from "./pages/courses/CourseDetails.svelte"

import Players from "./pages/players/Players.svelte"
import PlayerDetails from "./pages/players/PlayerDetails.svelte"
import CreatePlayer from "./pages/players/CreatePlayer.svelte"

export default {
    // Home
    '/': Home,
    '/home': Home,

    // Albums
    '/courses': Courses,
    '/courses/:id': CourseDetails,
    
    // Artists
    '/players': Players,
    '/players/:id': PlayerDetails,
    '/create-player': CreatePlayer,
}