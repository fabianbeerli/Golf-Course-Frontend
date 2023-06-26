<script>
    import axios from "axios";

    let players = [];

    function getPlayers() {
        axios.get("https://golf-course-backend-c071f3efa027.herokuapp.com/api/players").then((response) => {
            players = response.data;
        });
    }
    getPlayers();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Players</h1>
    <button type="button" class="btn btn-light" onclick="window.location.href = '#/create-player'">Add Player</button>

    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>handicap</th>
                <th>Golf Courses</th>
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
                    <td>
                        {player.golf_courses.map(golf_course => golf_course.location).join(", ")}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
