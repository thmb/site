<template>
    <section class="body-font bg-slate-600 text-slate-200">
        <div class="container grid grid-cols-1 lg:grid-cols-4 gap-10 px-4 py-16 mt-10 mx-auto">
            <!-- PERSONAL -->
            <div class="sm:col-span-2">
                <h4>{{ $t("component.social.personal.title") }}</h4>
                <p>{{ $t("component.social.personal.content") }}</p>
            </div>

            <!-- HOBBIES -->
            <div>
                <h4>{{ $t("component.social.hobbies.title") }}</h4>
                <span class="badge hobby">{{ $t("component.social.hobbies.pilot") }}</span>
                <span class="badge hobby">{{ $t("component.social.hobbies.linux") }}</span>
                <span class="badge hobby">{{ $t("component.social.hobbies.dance") }}</span>
                <span class="badge hobby">{{ $t("component.social.hobbies.swim") }}</span>
            </div>

            <!-- NETWORKS -->
            <div class="grid lg:justify-end">
                <h4>{{ $t("component.social.networks") }}</h4>
                <ul class="list-none flex flex-col space-y-2">
                    <li>
                        <a href="https://github.com/thmb" target="_blank">
                            <i class="i-mdi-github"></i> <span>github.com/thmb</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/thmb" target="_blank">
                            <i class="i-mdi-linkedin"></i> <span>linkedin.com/in/thmb</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://mastodon.social/@thmb" target="_blank">
                            <i class="i-mdi-mastodon"></i> <span>mastodon.social/@thmb</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<style scoped>
h4 {
    --at-apply: title-font font-medium tracking-widest text-sm mb-3
}

a {
    --at-apply: hover:text-white
}

a>i {
    --at-apply: inline-block text-lg align-middle mr-1
}

span.hobby {
    --at-apply: mr-2 mb-2
}
</style>
