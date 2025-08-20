<script lang="ts">
  import { onMount } from "svelte";
  import { EditorView, basicSetup } from "codemirror";
  import { html } from "@codemirror/lang-html";

  export let value: string = "";
  let el: HTMLDivElement;
  let view: EditorView;
  let pushingFromParent = false;

  onMount(() => {
    view = new EditorView({
      doc: value,
      extensions: [
        basicSetup,
        html(),
        EditorView.updateListener.of(update => {
          if (update.docChanged && !pushingFromParent) {
            value = update.state.doc.toString();
          }
        }),
        EditorView.theme({
          "&": { height: "auto" },                     // let it grow
          ".cm-scroller": { overflow: "hidden" }       // remove scrollbars
        })
      ],
      parent: el
    });

    return () => view?.destroy();
  });

  $: if (view && value !== view.state.doc.toString()) {
    pushingFromParent = true;
    view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } });
    pushingFromParent = false;
  }
</script>

<div bind:this={el} class="border w-full"></div>