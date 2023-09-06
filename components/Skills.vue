<template>
    <section class="container px-4 mx-auto mt-10">
        <h4 class="text-xl text-slate-700 dark:text-slate-100 mb-4">{{ $t("component.skills.title") }}</h4>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-10">
            <div class="flex flex-col space-y-lg">
                <div class="label">
                    <div class="value" style="width:90%">{{ $t("component.skills.science") }}</div>
                </div>
                <div class="label">
                    <div class="value" style="width:85%">{{ $t("component.skills.software") }}</div>
                </div>
                <div class="label">
                    <div class="value" style="width:70%">{{ $t("component.skills.platform") }}</div>
                </div>
                <div class="label">
                    <div class="value" style="width:55%">{{ $t("component.skills.crypto") }}</div>
                </div>
            </div>

            <div>
                <p class="text-lg text-slate-500 dark:text-slate-300">
                    {{ $t("component.skills.summary") }}
                </p>
            </div>

            <div>
                <span class="badge topic">SQL</span>
                <span class="badge topic">Python</span>
                <span class="badge topic">TypeScript</span>
                <span class="badge topic">Java(EE)</span>
                <span class="badge topic">C/C++</span>
                <span class="badge topic">HTML/CSS</span>
                <span class="badge topic">TensorFlow</span>
                <span class="badge topic">Scikit-Learn</span>
                <span class="badge topic">Spark</span>
                <span class="badge topic">Kafka</span>
                <span class="badge topic">FastAPI</span>
                <span class="badge topic">Nuxt</span>
                <span class="badge topic">Airflow</span>
                <span class="badge topic">Airbyte</span>
                <span class="badge topic">DBT</span>
                <span class="badge topic">Superset</span>
                <span class="badge topic">PostgreSQL</span>
                <span class="badge topic">MongoDB</span>
                <span class="badge topic">Kubernetes</span>
                <span class="badge topic">Prometheus</span>
                <span class="badge topic">Terraform</span>
                <span class="badge topic">AWS</span>
                <span class="badge topic">Google</span>
                <span class="badge topic">Azure</span>
            </div>
        </div>
    </section>
</template>



<style scoped>
span.topic {
    --at-apply: mr-1 mb-3
}

div.label {
    --at-apply: w-full rounded-full bg-slate-300 dark:bg-slate-500
}

div.value {
    --at-apply: bg-thau text-sm font-medium text-white leading-none rounded-full px-3 py-1
}
</style>