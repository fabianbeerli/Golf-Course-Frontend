<script>
    import axios from "axios";

    export let params = {};
    let player_id;

    $: {
        player_id = params.id;
        getPlayer();
        getCourses()
    }

    let course = {
        _id: "",
        golf_course_id: 0,
        location: "",
        size: ""
    };

    let player = {
        _id: "",
        id: 0,
        name: "",
        handicap: "",
        golf_courses: []
    };

    let courses = [];

    function getPlayer() {
        axios.get("https://golf-course-backend-c071f3efa027.herokuapp.com/api/player/" + player_id)
            .then((response) => {
                player = response.data;
            });
    }

    function getCourses() {
        axios.get("https://golf-course-backend-c071f3efa027.herokuapp.com/api/courses/")
            .then((response) => {
                courses = response.data;
            });
    }

    function addCourseToPlayer() {
        player.golf_courses.push(course);
        axios.put("https://golf-course-backend-c071f3efa027.herokuapp.com/api/players/" + player_id, player)
            .then((response) => {
                getPlayer();
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Player (ID: {player_id})</h1>
    <p>Name: {player.name}</p>
    <p>Handicap: {player.handicap}</p>
    <h2>Golf Courses</h2>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Size</th>
            </tr>
        </thead>
        <tbody>
            {#each player.golf_courses as course}
                <tr>
                    <td>
                        <a href={"#/courses/" + course.golf_course_id}>
                            {course.golf_course_id}
                        </a>
                    </td>
                    <td>
                        {course.location}
                    </td>
                    <td>
                        {course.size}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>

    <h2>Update Golf Courses</h2>
    <label for="player">Add Golf course to Player</label>
    <select class="form-select" bind:value={course} id="course">
        {#each courses as course}
            <option value={course}>{course.location}</option>
        {/each}
    </select>
    <button class="btn btn-primary mt-2" on:click={addCourseToPlayer}>Update</button>
</div>
