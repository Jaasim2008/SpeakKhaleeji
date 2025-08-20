<script lang="ts">
    import { onMount } from "svelte";
    import CodeMirrorEditor from "$lib/components/codemirroreditor.svelte";
    import { Code, Save } from "lucide-svelte";

    let content = `<button class="btn btn-primary">Click Me</button>`;
    let saveToStorageModal: HTMLDialogElement;
    let showSnippetsModal: HTMLDialogElement;
    let snippets = [
        {name: 'Arabic Text', kbd: '<span class="arabic"></span>'},
        {name: 'H1', kbd: '<h1 class="text-xl font-bold"></h1>'},
        {name: 'H3', kbd: '<h3 class="text-lg font-bold"></h3>'},
        {name: 'Translit.', kbd: '<i class="text-slate-700 text-sm"> ()</i>'}
    ];

    function updateContent(val: string) {
    content = val;
    }

    // Save to localStorage
    function saveContent() {
        localStorage.setItem("editorContent", content);
        saveToStorageModal.showModal();
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
    <div class="flex gap-6">
        <!-- Save to Storage -->
        <button class="btn btn-primary mt-2" on:click={saveContent}><Save />Save to localStorage</button>
        <dialog bind:this={saveToStorageModal} class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">Saved</h3>
                <p class="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        <!-- Show Snippets -->
        <button class="btn btn-primary mt-2" on:click={() => {showSnippetsModal.showModal()}}><Code />Show Snippets</button>
        <dialog bind:this={showSnippetsModal} class="modal">
            <div class="modal-box flex flex-col gap-2">
                <h3 class="text-lg font-bold">Snippets</h3>
                {#each snippets as snippet}
                    <div class="flex gap-4">
                        <p>{snippet.name}</p>
                        <kbd class="kbd mr-auto">{snippet.kbd}</kbd>
                    </div>
                {/each}
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>

    <h2 class="text-xl text-primary font-bold">Live Preview</h2>
    <div class="preview border p-4 mt-2">
        {@html content}
    </div>
</main>
