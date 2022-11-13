<script>
    let clazz;
    export {clazz as class}

    export let text;
    export let speed = 5;
    export let ripple = .7;
</script>

<div class="inline-block">
    {#each text as char, i}
        <span
          class={`inline-block ${clazz}`}
          style={`animation: wave-text ${speed}s ease-in-out ${i * ripple}s infinite`}
        >
            {char}
        </span>
    {/each}
</div>

<style global>
    @keyframes wave-text {
        00% {
            transform: translateY(0em);
        }
        60% {
            transform: translateY(-0.2em);
        }
        100% {
            transform: translateY(0em);
        }
    }
</style>