<script>
    import axios from "axios";

    let player = {
        id: 0,
        name: "",
        handicap: "",
        golf_courses: []
    };

    function addPlayer() {
        axios.post("http://localhost:3001/api/players", player)
            .then((response) => {
                alert("Player added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add a Player</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">ID</label>
            <input class="form-control" type="number" bind:value={player.id} />

        </div>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={player.name} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">handicap</label>
            <input class="form-control" type="text" bind:value={player.handicap} />
        </div>
        <button on:click={addPlayer} type="button" class="btn btn-primary">
            Add Player
        </button>
    </form>
</div>
