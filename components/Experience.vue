<template>
    <section class="container px-4 mt-10 mx-auto">
        <!-- <div class="card p-4"> -->
        <h3 class="text-xl text-slate-700 mb-4">EXPERIENCE</h3>
        <div class="experience">
            <div>
                <h4 class="position">{{ $t("component.experience.thau.position") }}</h4>
                <h4 class="duration">{{ $t("component.experience.thau.duration") }}</h4>
                <h4 class="company">{{ $t("component.experience.thau.company") }}</h4>
            </div>
            <p class="summary">{{ $t("component.experience.thau.summary") }}</p>
        </div>
        <div class="experience">
            <div>
                <h4 class="position">{{ $t("component.experience.una.position") }}</h4>
                <h4 class="duration">{{ $t("component.experience.una.duration") }}</h4>
                <h4 class="company">{{ $t("component.experience.una.company") }}</h4>
            </div>
            <p class="summary">{{ $t("component.experience.una.summary") }}</p>
        </div>
        <div class="experience">
            <div>
                <h4 class="position">{{ $t("component.experience.linksaude.position") }}</h4>
                <h4 class="duration">{{ $t("component.experience.linksaude.duration") }}</h4>
                <h4 class="company">{{ $t("component.experience.linksaude.company") }}</h4>
            </div>
            <p class="summary">{{ $t("component.experience.linksaude.summary") }}</p>
        </div>
        <div class="experience">
            <div>
                <h4 class="position">{{ $t("component.experience.ats.position") }}</h4>
                <h4 class="duration">{{ $t("component.experience.ats.duration") }}</h4>
                <h4 class="company">{{ $t("component.experience.ats.company") }}</h4>
            </div>
            <p class="summary">{{ $t("component.experience.ats.summary") }}</p>
        </div>
        <!-- </div> -->
    </section>
</template>

<style scoped>
div.experience {
    --at-apply: mb-4
}

div.experience>div {
    --at-apply: flex flex-col lg:flex-row text-base md:text-xl mb-2
}

h4.position {
    --at-apply: text-thau font-bold
}

h4.duration {
    --at-apply: text-slate-700 font-light ml-0 lg:ml-4 order-first lg:order-none
}

h4.company {
    --at-apply: text-slate-700 ml-0 lg:ml-auto
}

p.summary {
    --at-apply: text-slate-500 text-justify text-sm md:text-base
}
</style>