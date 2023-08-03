<template>
    <section class="container px-4 mx-auto mt-10">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div>
                <h4 class="text-xl text-slate-700 mb-2">{{ $t("component.skills.title") }}</h4>
                <p class="text-lg text-slate-500">{{ $t("component.skills.teamwork") }}</p>
            </div>
            <div>
                <div class="label">{{ $t("component.skills.science") }}</div>
                <div class="value">
                    <div style="width:80%"></div>
                </div>
                <div class="label">{{ $t("component.skills.software") }}</div>
                <div class="value">
                    <div style="width:95%"></div>
                </div>
                <div class="label">{{ $t("component.skills.database") }}</div>
                <div class="value">
                    <div style="width:90%"></div>
                </div>
                <div class="label">{{ $t("component.skills.platform") }}</div>
                <div class="value">
                    <div style="width:65%"></div>
                </div>
            </div>
            <div>
                <span class="badge">Python</span>
                <span class="badge">SQL</span>
                <span class="badge">TypeScript</span>
                <span class="badge">HTML/CSS</span>
                <span class="badge">Java(EE)</span>
                <span class="badge">C/C++</span>

                <span class="badge">TensorFlow</span>
                <span class="badge">PyTorch</span>
                <span class="badge">Spark</span>
                <span class="badge">Airflow</span>
                <span class="badge">Airbyte</span>
                <span class="badge">DBT</span>

                <span class="badge">PostgreSQL</span>
                <span class="badge">MongoDB</span>
                <span class="badge">Redis</span>
                <span class="badge">ElasticSearch</span>
                <span class="badge">Kafka</span>

                <span class="badge">FastAPI</span>
                <span class="badge">Vue</span>
                <span class="badge">Angular</span>
                <span class="badge">NestJS</span>
                <span class="badge">Kubernetes</span>
                <span class="badge">Git(Flow)</span>

                <span class="badge">AWS</span>
                <span class="badge">Google Cloud</span>
                <span class="badge">Azure</span>
                <span class="badge">CloudFlare</span>
                <span class="badge">GitHub</span>
                <span class="badge">Jira</span>
            </div>
        </div>
    </section>
</template>



<style scoped>
span.badge {
    --at-apply: inline-block text-sm font-semibold rounded-full bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-1 mr-2 mb-3
}

div.label {
    --at-apply: mb-1 text-base font-medium dark:text-white
}

div.value {
    --at-apply: w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700
}

div.value>div {
    --at-apply: bg-thau h-2 rounded-full dark:bg-slate-300
}
</style>