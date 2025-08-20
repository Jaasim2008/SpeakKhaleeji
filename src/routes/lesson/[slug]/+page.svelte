<script lang="ts">
    let { data } = $props();
    const lesson = data.lesson;
</script>

<main>
    <!-- Centered Layout -->
    <article class="p-6 md:p-2 md:w-[60vw] mx-auto">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm">
        <ul>
            <li>Lesson</li>
            <li>{lesson.title}</li>
        </ul>
        </div>
        <!-- Render Content -->
        {@html lesson.content}
    </article>
</main>