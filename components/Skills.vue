<template>
    <section class="container px-4 pb-4 mx-auto">
        <div class="card grid grid-cols-1 xl:grid-cols-4 gap-4 p-4">

            <div>
                <h4 class="title">PROGRAMMING LANGUAGES</h4>
                <span class="badge">Python</span>
                <span class="badge">C/C++</span>
                <span class="badge">SQL</span>
                <span class="badge">Java(EE)</span>
                <span class="badge">TypeScript</span>
                <span class="badge">HTML</span>
                <span class="badge">CSS</span>
                <span class="badge">Shell</span>
            </div>
            <div class="col-span-2">
                <h4 class="title">TOOLING AND SOFTWARE</h4>
                <span class="badge">TensorFlow</span>
                <span class="badge">PyTorch</span>
                <span class="badge">Airflow</span>
                <span class="badge">Airbyte</span>
                <span class="badge">DBT</span>
                <span class="badge">Kafka</span>
                <span class="badge">Spark</span>
                <span class="badge">Hadoop</span>
                <span class="badge">Kubernetes</span>
                <span class="badge">PostgreSQL</span>
                <span class="badge">MongoDB</span>
                <span class="badge">Redis</span>
                <span class="badge">Elastic</span>
                <span class="badge">FastAPI</span>
                <span class="badge">Vue</span>
                <span class="badge">Angular</span>
                <span class="badge">NestJS</span>
                <span class="badge">Git</span>
            </div>
            <div>
                <h4 class="title">CLOUD SERVICES</h4>
                <span class="badge">Amazon AWS</span>
                <span class="badge">Google Cloud</span>
                <span class="badge">Microsoft Azure</span>
                <span class="badge">CloudFlare</span>
                <span class="badge">DigitalOcean</span>
                <span class="badge">GitHub / Jira</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
h4.title {
    --at-apply: text-xl text-slate-700 mb-2
}

span.badge {
    --at-apply: inline-block text-sm font-medium font-bold bg-slate-200 text-slate-700 rounded-full px-2 py-1 mr-2 mb-2 dark:bg-slate-700 dark:text-slate-300
}
</style>