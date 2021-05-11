<template>
	<div class="project-container" v-if="project">
		<div class="header-container">
			<div class="overlay">
				<div class="project-details-container" >
					<p class="project-title">{{ project.title }}</p>
					<p class="role-title" style="margin-bottom: 24px;">{{ project.roles }}</p>
					<p class="subtitle-title">{{ project.subtitle }}</p>
				</div>
			</div>
			<vueper-slides fixed-height="100%" autoplay>
				<vueper-slide v-for="(image, i) in project.images" :key="i">
					<template v-slot:content>
						<img :src="image.image" class="slider-image">
					</template>
				</vueper-slide>
			</vueper-slides>
		</div>
		<div class="content-container">
			<h1>About</h1>
			<p class="subtitle">Technologies</p>
			<div class="tech-container">
				<div class="tech" v-for="tech in project.technologies" v-bind:key="tech.id">
					{{ tech.title }}
				</div>
			</div>
			<p class="subtitle" v-if="project.repos.length">Repositories</p>
			<a v-for="repo in project.repos" v-bind:key="repo.id" :href="repo.repo" target="_blank">{{ repo.repo }}</a>
			<p class="subtitle">Value Proposition</p>
			<p class="detail">{{project.value_proposition}}</p>
			<p class="subtitle">Contribution</p>
			<p class="detail">{{project.contribution}}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.project-container {
	height: 100%;
	width: 100%;

	overflow: scroll;
}

.header-container {
	height: 80vh;
	width: 100%;
	position: relative;

	vueper-slides {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
}

.slider-image {
	height: 100%;
}

.overlay {
	position: absolute;
	overflow: hidden;
	display: flex;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	pointer-events:none;
	z-index: 100;

	.project-details-container {
		margin: auto;
		background-color: rgba($color: $primary, $alpha: 0.9);
		padding: 24px;
		border-radius: 8px;

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

.content-container {
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 24px;
	margin-right: 24px;
	margin-bottom: 24px;

	h1 {
		margin-top: 32px;
		text-align: left;
		font-size: 3rem;
	}

	.subtitle {
		margin-top: 16px;
		text-align: left;
		font-size: 1.5rem;
		font-weight: 500;
		color: $primary;
		margin-bottom: 12px;
	}

	a {
		color: $text_detail;
		margin-left: 24px;
	}

	.detail {
		margin-left: 24px;
	}

	.tech-container {
		display: flex;

		.tech {
			padding: 12px;
			background-color: $primary;
			color: $text_main;
			margin: 12px;
			margin-left: 24px;
			margin-top: 0px;
			border-radius: 4px;
			font-weight: 500;
			min-width: 50px;
			text-align: center;
		}
	}
}
</style>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
	name: "Project",
	components: { VueperSlides, VueperSlide },
	data: function() {
		return {
			project: null,
		}
	},
	methods: {
		getProject: function() {
			this.axios.get(this.$api_hostname + "api/fetch-project/" + this.$route.params.id + "/").then((response) => {
				console.log(response.data.project);
				this.project = response.data.project;
			})
		}
	}, 
	mounted: function() {
		this.$nextTick(() => {
			this.getProject();
		})
	}
}
</script>