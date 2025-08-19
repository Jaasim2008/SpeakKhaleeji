<script lang="ts">
    import { GraduationCap, CircleUserRound } from 'lucide-svelte';
</script>

<nav class="w-screen py-4 px-4 bg-secondary flex justify-between items-center border-b border-b-black">
    <div>
        <a href="/" class="text-logo text-2xl font-bold">Speak Khaleeji</a>
    </div>
    <div class="flex flex-col-reverse md:flex-row gap-2">
        <button type="button" class="btn btn-primary"><GraduationCap color="#ffffff" /><a href="/#lessons" class="text-white text-sm md:text-base">Learn</a></button>
        <button type="button" class="btn btn-primary"><CircleUserRound color="#ffffff" /><a href="#" class="text-white text-sm md:text-base">About Me</a></button>
    </div>
</nav>