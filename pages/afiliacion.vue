<template>
  <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
    <h1>Información sobre afiliación</h1>
    <p>
      Este sitio web participa en el programa de afiliación de Amazon.es y
      genera ingresos por las compras realizadas por los usuarios mediante los
      enlaces de afiliado que se pueden encontar en él.
    </p>
    <p>
      La participación en este preograma no condiciona la información
      proporcionada en este sitio web, es independiente, veraz y su finalidad es
      ayudar a los usuarios a tomar decisiones de compra para cualquiera de los
      productos que se analizan en {{ websiteName }}.
    </p>
    <p>
      Amazon y el logotipo de Amazon son marcas comerciales de Amazon.com, Inc o
      de sociedades de su grupo.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Afiliacion',
  computed: {
    websiteName() {
      return process.env.websiteName
    },
  },
  head: {
    title: 'Afiliación',
    meta: [
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex,follow',
      },
    ],
  },
}
</script>
