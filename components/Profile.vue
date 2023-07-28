<template>
    <section class="container items-center grid grid-cols-1 xl:grid-cols-2 gap-10 mx-auto px-4 pt-30 pb-10">

        <div class="card">
            <img class="picture" src="/images/thiago-2018.jpg" alt="Thiago Madureira Braga">
            <div class="content">
                <h3 class="title mb-2">{{ $t("component.profile.profession") }}</h3>
                <div class="mb-2">
                    <span class="badge">{{ $t("component.profile.language.portuguese") }}</span>
                    <span class="badge">{{ $t("component.profile.language.english") }}</span>
                    <span class="badge">{{ $t("component.profile.language.spanish") }}</span>
                    <!-- <span class="badge">{{ $t("component.profile.language.chinese") }}</span> -->
                </div>
                <ul class="list-none">
                    <li class="mb-1">
                        <a href="https://maps.google.com/maps?q=barcelona+(THAU)&z=10" target="_blank">
                            <i class="i-mdi-home-outline"></i>
                            <span>{{ $t("component.profile.address") }}</span>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a href="mailto:thiago@thau.tech">
                            <i class="i-mdi-email-outline"></i>
                            <span>thiago@thau.tech</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/34677470860">
                            <i class="i-mdi-whatsapp"></i>
                            <span>+34 677 470 860</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card">
            <div class="content">
                <h4 class="text-xl text-slate-700">{{ $t("component.profile.title") }}</h4>
                <p class="text-base text-slate-500">{{ $t("component.profile.summary") }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
a {
    --at-apply: text-lg text-slate-700 hover:font-bold cursor-pointer
}

a>i {
    --at-apply: align-middle inline-block mr-2
}

a>span {
    --at-apply: align-middle
}

.card {
    --at-apply: flex flex-col items-center bg-white border border-slate-200 rounded-lg shadow md:flex-row hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700
}

.picture {
    --at-apply: object-cover w-full md:w-64 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg
}

.content {
    --at-apply: flex flex-col justify-evenly h-auto xl:h-64 px-8 py-4
}

.title {
    --at-apply: text-2xl text-slate-800 font-bold dark:text-white
}

.badge {
    --at-apply: inline-block bg-slate-200 text-slate-700 text-sm font-semibold px-2 mr-2 lg:mr-1 rounded-full dark:bg-slate-700 dark:text-slate-300
}
</style>