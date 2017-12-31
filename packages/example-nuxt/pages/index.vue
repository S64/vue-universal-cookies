/*
 * Copyright (C) 2018 Shuma Yoshioka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

<template>
	<div>
		<h1>Example: nuxt-universal-cookies</h1>
		{{ $cookies.set('render_time', new Date().getTime()) }}
		<div>`$cookies.get('render_time')`: {{ JSON.stringify($cookies.get('render_time')) }}</div>
		<div>`$cookies.get('click_time')`: {{ JSON.stringify($cookies.get('click_time')) }}</div>
		<button v-on:click="$cookies.set('click_time', new Date().getTime())">update `click_time` by time</button>
	</div>
</template>
