<script lang="ts">
    import { GraduationCap, CircleUserRound } from 'lucide-svelte';
</script>

<nav class="w-screen py-4 px-4 bg-secondary flex justify-between items-center border-b border-b-black">
    <div>
        <a href="/" class="text-logo text-white text-2xl font-bold">Speak Khaleeji</a>
    </div>
    <div class="flex flex-col-reverse md:flex-row gap-2">
        <a href="/#lessons" type="button" class="btn btn-primary text-white text-sm md:text-base"><GraduationCap color="#ffffff" />Learn</a>
        <a href="#" type="button" class="btn btn-primary text-white text-sm md:text-base"><CircleUserRound color="#ffffff" />About Me</a>
    </div>
</nav>