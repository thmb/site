<template>
    <section class="container px-4 mx-auto mt-10">
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div>
                <h4 class="text-xl text-slate-700 mb-4">{{ $t("component.skills.title") }}</h4>
                <p class="text-lg text-slate-500">{{ $t("component.skills.summary") }}</p>
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
                <div class="label">{{ $t("component.skills.management") }}</div>
                <div class="value">
                    <div style="width:95%"></div>
                </div>
                <div class="label">{{ $t("component.skills.platform") }}</div>
                <div class="value">
                    <div style="width:65%"></div>
                </div>
            </div>
            <div>
                <span class="badge topic">Python</span>
                <span class="badge topic">SQL</span>
                <span class="badge topic">TypeScript</span>
                <span class="badge topic">HTML/CSS</span>
                <span class="badge topic">Java(EE)</span>
                <span class="badge topic">C/C++</span>

                <span class="badge topic">TensorFlow</span>
                <span class="badge topic">PyTorch</span>
                <span class="badge topic">Spark</span>
                <span class="badge topic">Airflow</span>
                <span class="badge topic">Airbyte</span>
                <span class="badge topic">DBT</span>

                <span class="badge topic">PostgreSQL</span>
                <span class="badge topic">MongoDB</span>
                <span class="badge topic">Redis</span>
                <span class="badge topic">ElasticSearch</span>
                <span class="badge topic">Kafka</span>

                <span class="badge topic">FastAPI</span>
                <span class="badge topic">Vue</span>
                <span class="badge topic">Angular</span>
                <span class="badge topic">NestJS</span>
                <span class="badge topic">Kubernetes</span>
                <span class="badge topic">Git(Flow)</span>

                <span class="badge topic">AWS</span>
                <span class="badge topic">Google Cloud</span>
                <span class="badge topic">Azure</span>
                <span class="badge topic">CloudFlare</span>
                <span class="badge topic">GitHub</span>
                <span class="badge topic">Jira</span>
            </div>
        </div>
    </section>
</template>



<style scoped>
span.topic {
    --at-apply: mr-2 mb-3
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