<template>
  <div class="contact-page page container">
    <h1 class="page-title">Contact with us</h1>
    <section class="contact-page__description">
      <div>
        <img
            src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png"
            alt="img"
            class="contact-page__img"
        />
        <div class="description__title">
          Great contact forms typically:
        </div>
        <p class="description__paragraph">
          As an avid coffee drinker, I deeply relate to this particular header. Aside from that, this is a friendly and
          inviting message that gets right to the point for the visitor. It shows where the company is located on one
          side of the page, as well as how you can contact them on the other side of the page.
        </p>

        <p class="description__paragraph">

          Explain why someone should contact your business.
        </p>
        <p class="description__paragraph">

          Describe how your business can help solve the visitors' problems.
        </p>
        <p class="description__paragraph">
          Include an email and phone number so visitors can get in touch with you on their first attempt.
        </p>
        <p class="description__paragraph">
          Include a short form using fields that'll help your business understand who's contacting them.
          Have a call-to-action to provide visitors with another action to take if they choose not to complete the form.
          Leverage key contact form design elements — like user-friendly layouts, themes, and clear formatting — to
          create the optimal user experience for visitors.
          Showcase the company's thought leadership, whether by including a list of recent blog posts or articles about
          the company in the press.
          Link to active social media accounts like Twitter, Facebook, Instagram, and LinkedIn to give visitors another
          way to engage with the business.
        </p>
      </div>
      <div>
        <h2>
          Contact Us Page Best Practices
        </h2>
        <p class="description__paragraph">
          Like I mentioned above, a Contact Us page is one of the most valuable pages you can have on your site.
        </p>
        <p class="description__paragraph">

          But, unfortunately, many website designers might place it near the bottom of their priority list in terms of
          copywriting and design. (Which is probably why many contact pages look like they were built in the 1990s…)
        </p>
        <Form/>
      </div>
    </section>
  </div>
</template>
<style scoped>
.contact-page__description {
  display: flex;
  gap: 40px;
  margin: 20px 0 60px;
  @media screen and (max-width: 1223px) {
    & {
      flex-direction: column;
    }
    }
}

.contact-page__img {
  border-radius: 4px;
  max-width: 790px;
  height: 472px;
  margin-bottom: 24px;
  @media screen and (max-width: 623px) {
    & {
      height: auto;
      max-width: 250px;
    }
   }
}
</style>

<script setup lang="ts">
import Form from "../components/Form.vue";
</script>