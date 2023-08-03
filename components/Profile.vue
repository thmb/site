<template>
    <section class="w-full pb-4">
        <div class="h-60 bg-thau"></div>

        <div class="container items-center grid grid-cols-1 xl:grid-cols-2 gap-8 mx-auto -mt-30 px-4">

            <div class="flex flex-col md:flex-row">
                <img class="w-full md:w-60" src="/images/thiago-2018.jpg" alt="Thiago Madureira Braga">
                <div class="flex flex-col justify-around ml-8">
                    <div>
                        <h3 class="font-bold text-2xl text-slate-100 mb-2">
                            {{ $t("component.profile.profession") }}
                        </h3>
                        <div>
                            <span class="badge">
                                {{ $t("component.profile.language.portuguese") }}
                            </span>
                            <span class="badge">
                                {{ $t("component.profile.language.english") }}
                            </span>
                            <span class="badge">
                                {{ $t("component.profile.language.spanish") }}
                            </span>
                        </div>
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

            <div class="h-full flex flex-col justify-around">
                <h4 class="text-2xl text-slate-100 font-light">
                    {{ $t("component.profile.focus") }}
                </h4>
                <p class="text-base text-slate-700 leading-snug">
                    {{ $t("component.profile.summary") }}
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
a {
    --at-apply: text-lg text-slate-700 hover:text-slate-900 cursor-pointer
}

a>i {
    --at-apply: align-middle inline-block mr-2
}

a>span {
    --at-apply: align-middle
}

.badge {
    --at-apply: inline-block bg-slate-200 text-slate-700 text-sm font-semibold px-2 py-1 mr-2 lg:mr-1 rounded-full dark:bg-slate-700 dark:text-slate-300
}
</style>