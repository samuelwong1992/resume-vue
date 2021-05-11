<template>
	<div class="work-container">
		<p class="main-title">My Work</p>
		<p class="detail-text">
			I have held many roles throughout my career, which has forced me to develop a well rounded dev stack. I graduated from Adelaide Uni with a degree in Software Engineering with Honours; where I learned a lot about developing at a high level. It was there that I learned several paradigms including AI and ML, Evolutionary Computing, State-Based Programming, Algorithm and Data Structure Design and much more. However, during and since my higher level education, I taught myself how to actually create products that were going to be used in the real world. I taught myself how to develop native mobile apps with Swift and Java, which got my foot in the door at Svelte Studios. It was here that I learned how to become a strong mobile developer under tutelage of some very experienced and highly skilled engineers. After about 2 and a half years at Svelte, I was headhunted to start a tech business to service the automotive industry. With xPhase and iAppraise, I wrote and managed all the mobile code, while recruiting and overseeing the development of high quality web Front-End and Back-End platforms. It was here that I learned how to develop all things web. As xPhase grew, it was time to expand our product offering and I took over the web development for these new undertakings, while the existing web team continued to focus on the main product.
			<br><br>
			The following works are works that I either developed myself or as part of a team. Some of these projects are ones I made for clients, while others are ones I've made for my own purposes; either to release as fully fledged and supported products or as experiments to hone my skills and teach myself new technologies.
		</p>

		<hr style="margin-top: 24px; margin-bottom: 24px;">

		<div class="projects-container">
			<div class="project-container" v-for="project in projects" v-bind:key="project.id">
				<img :src="project.thumbnail" alt="" srcset="" v-on:click="clickedProject(project.id)">
				<div class="overlay">
					<div class="project-details-container">
						<p class="project-title">{{ project.title }}</p>
						<p class="role-title" style="margin-bottom: 24px;">{{ project.roles }}</p>
						<p class="subtitle-title">{{ project.subtitle }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.work-container {
	width: 100%;
	
	margin-top: 24px;
  	margin-left: 32px;
	margin-right: 32px;
	margin-bottom: 12px;

	overflow: scroll;
}

.detail-text {
	margin-top: 24px;
}

.projects-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 24px;
	row-gap: 24px;

	.project-container {
		position: relative;
		padding-top: 50%;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: contain;
			background-color: white;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			cursor: pointer;
		}

		img:hover ~ .overlay {
			height: 100%;
			transition: height 0.15s ease-out;
		}

		.overlay {
			position: absolute;
			overflow: hidden;
			display: flex;
			background-color: rgba($color: $primary, $alpha: 0.9);
			width: 100%;
			height: 0%;
			transition: height 0.15s ease-out;
			top: 0;
			left: 0;
			pointer-events:none;

			.project-details-container {
				margin: auto;

				.project-title {
					font-size: 1.5rem;
					font-weight: 600;
				}

				.role-title {
					font-size: 1.3rem;
					font-weight: 600;
				}

				.subtitle-title {
					font-size: 1.1rem;
					font-weight: 600;
				}
			}
		}
	}
}
</style>

<script>
export default {
  name: "Work",
  data: function() {
	  return {
		  projects: [],
	  }
  },
  components: {
  },
  methods: {
    getProjects: function() {
		this.axios.get(this.$api_hostname + "api/fetch-projects/").then((response) => {
			this.projects = response.data.projects;
		})
	},
	clickedProject: function(id) {
		console.log(id);
		this.$router.push({ name: "Project", params: { id: id } });
	}
  },
  mounted: function() {
	  this.$nextTick(() => {
		  this.getProjects();
	  });
  },
};
</script>