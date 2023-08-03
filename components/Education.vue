<template>
    <section class="container px-4 mt-10 mx-auto">
        <h3 class="text-xl text-slate-700 mb-2">EDUCATION</h3>
        <div class="education">
            <div>
                <h4 class="course">{{ $t("component.education.ufrj.course") }}</h4>
                <h4 class="duration">{{ $t("component.education.ufrj.duration") }}</h4>
                <h4 class="school">{{ $t("component.education.ufrj.school") }}</h4>
            </div>
            <p class="summary">{{ $t("component.education.ufrj.summary") }}</p>
        </div>
        <div class="education">
            <div>
                <h4 class="course">{{ $t("component.education.ufmg.course") }}</h4>
                <h4 class="duration">{{ $t("component.education.ufmg.duration") }}</h4>
                <h4 class="school">{{ $t("component.education.ufmg.school") }}</h4>
            </div>
            <p class="summary">{{ $t("component.education.ufmg.summary") }}</p>
        </div>
    </section>
</template>

<style scoped>
div.education {
    --at-apply: mb-4
}

div.education>div {
    --at-apply: flex flex-col lg:flex-row text-base md:text-xl mb-2
}

h4.course {
    --at-apply: text-thau font-bold
}

h4.duration {
    --at-apply: text-slate-700 font-light ml-0 lg:ml-4 order-first lg:order-none
}

h4.school {
    --at-apply: text-slate-700 ml-0 lg:ml-auto
}

p.summary {
    --at-apply: text-slate-500 text-justify text-sm md:text-base
}
</style>