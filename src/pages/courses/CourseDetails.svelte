<script>
    import axios from "axios";

    export let params = {};

    let id;

    $: {
        // "Reactive Statement":
        // This block of is executed whenever the value of a variable in it changes.
        // See https://svelte.dev/tutorial/reactive-statements
        id = params.id;
        getCourse();
        getHoles();
        getPlayersForCourse();
    }

    let course = {};
    let players = [];
    let holes = [];

    function getCourse() {
        axios.get("https://golf-course-backend-c071f3efa027.herokuapp.com/api/course/" + id)
            .then((response) => {
                course = response.data;
            });
    }

    function getHoles() {
        axios.get("https://golf-course-backend-c071f3efa027.herokuapp.com/api/holes/" + id)
            .then((response) => {
            if (Array.isArray(response.data)) {
                holes = response.data;
            } else {
                holes = [response.data];
            }
            });
    }

    function getPlayersForCourse() {
        axios.get("https://golf-course-backend-c071f3efa027.herokuapp.com/api/playersforcourse/" + id)
            .then((response) => {
            if (Array.isArray(response.data)) {
                players = response.data;
            } else {
                players = [response.data];
            }
            });
    }

</script>

<div class="mb-5">
    <h1 class="mt-3">Course (ID: {id})</h1>
    <p>Location: {course.location}</p>
    <p>Size: {course.size}</p>
    <table class="table">
        <thead>
            <tr>
                <th>Hole Number</th>
                <th>level</th>
            </tr>
        </thead>
        <tbody>
            {#each holes as hole}
                <tr>
                    <td>
                        {hole.hole_id}
                    </td>
                    <td>
                        {hole.level}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>handicap</th>
            </tr>
        </thead>
        <tbody>
            {#each players as player}
                <tr>
                    <td>
                        <a href={"#/players/" + player.id}>
                            {player.id}
                        </a>
                    </td>
                    <td>
                        {player.name}
                    </td>
                    <td>
                        {player.handicap}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
