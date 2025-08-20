<svelte:head>
    <title>Speak Khaleeji</title>
</svelte:head>

<script lang="ts">
	import { LibraryBig } from "lucide-svelte";

    interface Lesson {
        id: number;
        urltitle: string;
        title: string;
        badge: string;
        description: string;
        content: string;
    }
    interface PageData {
        lessons: Lesson[];
    }
    let { data }: { data: PageData } = $props(); //get 'lessons' table from supabase 
    console.log(data.lessons);
</script>

<main>
    <!-- Hero -->
    <section class="h-76 grid grid-cols-3 grid-rows-1 items-center p-6 text-xl md:text-3xl group">
        <!-- English Text -->
        <div>
            <p>Learn to speak</p>
            <p class="text-logo mt-2 font-extrabold text-2xl md:text-4xl group-hover:text-primary transition-colors">Khaleeji Arabic</p>
            <p>100% Free and Open Source</p> <!-- TODO create github and link it here -->
        </div>
        <!-- Middle East Map SVG (credit: By Pava (derivate work from: this picture by ChNPP) - Own work, CC BY-SA 3.0 it, https://commons.wikimedia.org/w/index.php?curid=40388708) -->
        <div class="mx-auto">
            <img class="w-52 h-auto" src="/map.svg" alt="Middle East Map SVG" title="https://commons.wikimedia.org/w/index.php?curid=40388708">
        </div>
        <!-- Arabic Text -->
        <div>
            <p class="arabic">تعلّم تتكلم</p>
            <p class="arabic font-extrabold my-2 text-2xl md:text-4xl group-hover:text-primary transition-colors">الخليجية العربية</p>
            <p class="arabic">مجاني 100% ومفتوح المصدر</p>
        </div>
    </section>
    <hr class="text-accent">
    <!-- Centered Main Page Contents -->
     <section class="w-[80vw] md:w-[60vw] mx-auto p-2">
        <h1 id="lessons" class="text-xl md:text-3xl italic mb-2 flex items-center gap-2"><LibraryBig />Lessons</h1>
        <!-- Grid of Lesson Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 mt-2 gap-3">
            {#each data.lessons as lesson}
            <div class="bg-accent p-2 md:p-4 flex flex-col gap-2 rounded border border-black">
                <div class="flex gap-1 justify-between items-center">
                    <h3 class="md:text-xl font-bold">{lesson.title}</h3>
                    <div class="badge badge-secondary text-xs md:text-base">{lesson.badge}</div>
                </div>
                <p class="text-sm md:text-base">{@html lesson.description}</p>
                <a href={'/lesson/' + lesson.urltitle} class="btn btn-sm btn-outline btn-primary ml-auto text-xs md:text-base" type="button">Read</a>
            </div>
            {/each}
        </div>
     </section>
</main>