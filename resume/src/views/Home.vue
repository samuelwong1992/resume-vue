<template>
  <div class="image-container">
    <img class="background-image" src="@/assets/code-image-2.png" alt="">
    <div class="logo-container">
      <img class="logo-image" src="@/assets/face.png" alt="">
    </div>
  </div>
  <div class="about-me-container">
    <h1 class="main-title">About Me</h1>
    <div class="subtitle">
      <p class="main-subtitle">Mobile Developer</p> &nbsp; | &nbsp;  <p class="main-subtitle">Web Developer</p> &nbsp; | &nbsp; <p class="main-subtitle">Team Manager</p>
    </div>
    <p class="detail-text">
      I'm a Full Stack Engineer creating native apps for iOS and Android devices in Swift and Java, while also building Back Ends in Python with Django Rest Framework. I build web sites and web apps from creation to deployment with Django and Vue. My passion is Mobile Development, particularly iOS, but for the last 5 years I have been a CTO, meaning I've had to develop, debug, manage and deploy codebases along the entire stack.
      <br><br>
      I've built software as a solo developer, but also as part of and as a leader of a team. As the CTO and Lead Developer of a B2B company, I've gained experience interpreting and breaking down requirements into technical goals from clients, customers and industry experts.
      <br><br>
      I exceed in working in team situations, along side UI and UX designers and Specialist Developers to produce well thought out, efficiently integrated systems. 
    </p>
    <hr>
    <div class="my-stack-container">
      <h1 class="secondary-title">My Stack</h1>
      <div class="stack-container" v-for="stack in getStacks()" :key="stack.title">
        <img :src="stack.img">
        <p>{{ stack.title }}</p>
        <p class="detail-text">{{ stack.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.image-container {
  overflow: scroll;
  width: 20%;
  min-width: 20%;
  height: 100%;
  max-height: 100%;
  box-shadow: 6px 0 9px -4px black, -6px 0 9px -4px black;
  position: relative;

  .background-image {
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .logo-container {
    width: 75%;
    left: 12.5%;
    top: 10%;
    position: absolute;

    .logo-image {
      width: 100%;
      border-radius: 50%;
      border: 4px solid white;
    }
  }
}

.about-me-container {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
  max-height: 100%;
  overflow: scroll;

  .subtitle {
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    margin-bottom: 18px;
    
    font-weight: 600;

    .main-subtitle {
      color: $primary;
    }
  }

  hr {
    border: 1px solid white;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .my-stack-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    .secondary-title {
      text-align: left;
      font-size: 2em;
      font-weight: 900;
      grid-column: span 2;
    }

    .stack-container {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 24px;

      p {
        margin-top: 12px;
      }

      img {
        height: 50px;
        width: 50px;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  methods: {
    getStacks: function() {
      var stack = [];

      var mobileStack = new Object();
      mobileStack.title = "Mobile Development";
      mobileStack.subtitle = "I build native iOS Apps with Swift using Xcode. I build native Android Apps with Java using Android Studios. I choose to build natively because the end result has higher performance, better security, better access to device hardware and is better future-proofed; all which lead to a better user expereince (which in my mind is key to successful apps).";
      mobileStack.img = require("@/assets/phone.png")
      stack.push(mobileStack);
      
      var frontendStack = new Object();
      frontendStack.title = "Front-End Web Development";
      frontendStack.subtitle = "Different Front-Ends require different technologies, depending on several factors including their size, complexity, urgency and more. For static SPAs as well as more complex websites and web apps, I use Vue.js. It can also leverage Axios to pull data from a Back-End if it needs to be dynamic. If the app is simplistic and requires client-generated content then I would build it with Django as an immediate add-on to the Django Rest Framework.";
      frontendStack.img = require("@/assets/monitor.png")
      stack.push(frontendStack);

      var backendStack = new Object();
      backendStack.title = "Back-End Web Development";
      backendStack.subtitle = "I build Back-Ends in Django Rest Framework. DRF can be a great tool to leverage for Back-End Development because of its complexity flexibility; it can prototype quickly or be used to create production quality code.";
      backendStack.img = require("@/assets/stack.png")
      stack.push(backendStack);

      return stack;
    }
  },
};
</script>
