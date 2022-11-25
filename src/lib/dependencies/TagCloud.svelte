<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    export let texts = ['Add', 'Some', 'Texts', 'Here'];
    export let maxSpeed: "slow" | "normal" | "fast" = "fast";
    export let textClass: string;
    export let textSize = .1;   // percentage radius in pixels

    let container: HTMLElement;
    let containerWidth: number;
    $: radius = containerWidth / 2; // expand to fill parent
    let cloud;

    function initCloud() {
      const TagCloud = window["TagCloud"];
      if (!TagCloud) return;

      const options = {
        radius,
        maxSpeed,
        itemClass: textClass
      };

      cloud?.destroy();
      cloud = TagCloud(container, texts, options);
      adjustItemTextSizes();
    }

    function adjustItemTextSizes() {
      for (let item of container.querySelectorAll('span')) {
        console.log(item);
        const size = textSize * radius;
        item["style"].fontSize = `${size}px`;
      }
    }

    onMount(async () => {
        window["TagCloud"] = window["TagCloud"] ?? (await import('TagCloud/dist/TagCloud.js'))['default'];
        initCloud();
    });

    $: if (radius) {
      initCloud();
    }

    $: if (texts) {
        cloud?.update(texts);
    }

    onDestroy(() => {
        if (cloud) {
            cloud.destroy();
            cloud = null;
        }
    });
</script>


<div bind:this={container} class="w-full" bind:clientWidth={containerWidth}>
</div>