<script lang="ts">
    let { data } = $props();
    const lesson = data.lesson;
</script>

<svelte:head>
    <title>{lesson.pagetitle}</title>
</svelte:head>

<main>
    <!-- Centered Layout -->
    <article class="p-6 md:p-2 md:w-[60vw] mx-auto">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm">
        <ul>
            <li><a class="text-primary italic underline" href="/#lessons">Lesson</a></li>
            <li>{lesson.pagetitle}</li>
        </ul>
        </div>
        <!-- Render Content -->
        {@html lesson.content}
    </article>
</main>