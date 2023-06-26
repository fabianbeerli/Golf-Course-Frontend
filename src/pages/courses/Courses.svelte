<script>
    import axios from "axios";

    let courses = [];

    function getCourses() {
        axios.get("http://localhost:3001/api/courses").then((response) => {
            courses = response.data;
        });
    }
    getCourses();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Golf Courses</h1>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Location</th>
                <th>Size</th>
            </tr>
        </thead>
        <tbody>
            {#each courses as course}
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
</div>
