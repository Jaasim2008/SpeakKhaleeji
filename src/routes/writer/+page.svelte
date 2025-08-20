<script lang="ts">
    import { onMount } from "svelte";
    import CodeMirrorEditor from "$lib/components/codemirroreditor.svelte";
    import { Save } from "lucide-svelte";

    let content = `<button class="btn btn-primary">Click Me</button>`;

    function updateContent(val: string) {
    content = val;
    }

    // Save to localStorage
    function saveContent() {
    localStorage.setItem("editorContent", content);
    alert("Saved to localStorage ✅");
    }

    // Load saved content on page mount
    onMount(() => {
    const saved = localStorage.getItem("editorContent");
    if (saved) {
        content = saved;
    }
    });
</script>

<main class="p-2 space-y-4">
    <p>
        Tools: 
        <a class="text-primary italic" target="_blank" href="https://daisyui.com/components/">DaisyUI Components</a>, 
        <a class="text-primary italic" target="_blank" href="https://tailwindcss.com/docs/installation/using-vite">Tailwind Docs</a> & 
        <a class="text-primary italic" target="_blank" href="https://www.google.com/inputtools/try/">Google Input Tools</a>
    </p>

    <h2 class="text-xl text-primary font-bold">HTML Editor</h2>
    <CodeMirrorEditor bind:value={content} />
    <button class="btn btn-primary mt-2" on:click={saveContent}><Save />Save to localStorage</button>

    <h2 class="text-xl text-primary font-bold">Live Preview</h2>
    <div class="preview border p-4 mt-2">
        {@html content}
    </div>
</main>
