<template>
    <section class="container px-4 pb-4 mx-auto">
        <div class="card p-4">
            <h3 class="text-xl text-slate-700 mb-2">EXPERIENCE</h3>
            <div class="position">
                <div>
                    <h4 class="role">{{ $t("component.experience.thau.role") }}</h4>
                    <h4 class="date">{{ $t("component.experience.thau.date") }}</h4>
                    <h4 class="site">{{ $t("component.experience.thau.site") }}</h4>
                </div>
                <p class="work">{{ $t("component.experience.thau.work") }}</p>
            </div>
            <div class="position">
                <div>
                    <h4 class="role">{{ $t("component.experience.una.role") }}</h4>
                    <h4 class="date">{{ $t("component.experience.una.date") }}</h4>
                    <h4 class="site">{{ $t("component.experience.una.site") }}</h4>
                </div>
                <p class="work">{{ $t("component.experience.una.work") }}</p>
            </div>
            <div class="position">
                <div>
                    <h4 class="role">{{ $t("component.experience.linksaude.role") }}</h4>
                    <h4 class="date">{{ $t("component.experience.linksaude.date") }}</h4>
                    <h4 class="site">{{ $t("component.experience.linksaude.site") }}</h4>
                </div>
                <p class="work">{{ $t("component.experience.linksaude.work") }}</p>
            </div>
            <div class="position">
                <div>
                    <h4 class="role">{{ $t("component.experience.ats.role") }}</h4>
                    <h4 class="date">{{ $t("component.experience.ats.date") }}</h4>
                    <h4 class="site">{{ $t("component.experience.ats.site") }}</h4>
                </div>
                <p class="work">{{ $t("component.experience.ats.work") }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
div.position {
    --at-apply: mb-4
}

div.position>div {
    --at-apply: flex flex-col lg:flex-row text-base md:text-xl mb-2
}

h4.role {
    --at-apply: text-thau font-bold
}

h4.date {
    --at-apply: text-slate-700 font-light ml-0 lg:ml-4 order-first lg:order-none
}

h4.site {
    --at-apply: text-slate-700 ml-0 lg:ml-auto
}

p.work {
    --at-apply: text-slate-500 text-justify text-sm md:text-base
}
</style>