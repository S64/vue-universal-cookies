<template>
	<div>
		<h1>Example: nuxt-universal-cookies</h1>
		{{ $cookies.set('render_time', new Date().getTime()) }}
		<div>`$cookies.get('render_time')`: {{ JSON.stringify($cookies.get('render_time')) }}</div>
		<div>`$cookies.get('click_time')`: {{ JSON.stringify($cookies.get('click_time')) }}</div>
		<button v-on:click="$cookies.set('click_time', new Date().getTime())">update `click_time` by time</button>
	</div>
</template>
