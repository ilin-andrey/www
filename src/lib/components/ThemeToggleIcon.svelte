<svg aria-hidden="true" viewBox="0 0 24 24">
	<mask id="moon-mask" class="moon">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<circle cx="24" cy="10" r="6" fill="black" />
	</mask>

	<circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
	<g class="sun-beams" stroke="currentColor" stroke-width="2px">
		<line x1="12" y1="1" x2="12" y2="3" />
		<line x1="12" y1="21" x2="12" y2="23" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="1" y1="12" x2="3" y2="12" />
		<line x1="21" y1="12" x2="23" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</g>
</svg>

<style>
	svg {
		width: 1.5rem;
	}

	svg .moon,
	svg .sun,
	svg .sun-beams {
		transform-origin: center center;
	}

	:root[data-theme='dark'] svg .sun {
		transform: scale(1.75);
	}

	:root[data-theme='dark'] svg .sun-beams {
		opacity: 0;
	}

	:root[data-theme='dark'] svg .moon > circle {
		transform: translateX(-7px);
	}

	@supports (cx: 1) {
		:root[data-theme='dark'] svg .moon > circle {
			transform: translateX(0);
			cx: 17;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		svg .sun {
			transition: transform var(--transition-duration-long) var(--ease-elastic-3);
		}

		svg .sun-beams {
			transition: transform var(--transition-duration-long) var(--ease-elastic-4),
				opacity var(--transition-duration-long) var(--ease-3);
		}

		svg .moon > circle {
			transition: transform calc(var(--transition-duration-long) / 2) var(--ease-out-5);
		}

		@supports (cx: 1) {
			svg .moon > circle {
				transition: cx calc(var(--transition-duration-long) / 2) var(--ease-out-5);
			}
		}

		:root[data-theme='dark'] svg .sun {
			transform: scale(1.75);
			transition-timing-function: var(--ease-3);
			transition-duration: calc(var(--transition-duration-long) / 2);
		}

		:root[data-theme='dark'] svg .sun-beams {
			transform: rotateZ(-25deg);
			transition-duration: calc(var(--transition-duration-long) / 3);
		}

		:root[data-theme='dark'] svg .moon > circle {
			transition-delay: calc(var(--transition-duration-long) / 2);
			transition-duration: var(--transition-duration-long);
		}
	}

	@media (prefers-color-scheme: dark) {
		:root[data-theme='system'] svg .sun {
			transform: scale(1.75);
		}

		:root[data-theme='system'] svg .sun-beams {
			opacity: 0;
		}

		:root[data-theme='system'] svg .moon > circle {
			transform: translateX(-7px);
		}

		@supports (cx: 1) {
			:root[data-theme='system'] svg .moon > circle {
				transform: translateX(0);
				cx: 17;
			}
		}

		:root[data-theme='system'] svg .sun {
			transform: scale(1.75);
			transition-timing-function: var(--ease-3);
			transition-duration: calc(var(--transition-duration-long) / 2);
		}

		:root[data-theme='system'] svg .sun-beams {
			transform: rotateZ(-25deg);
			transition-duration: calc(var(--transition-duration-long) / 3);
		}

		:root[data-theme='system'] svg .moon > circle {
			transition-delay: calc(var(--transition-duration-long) / 2);
			transition-duration: var(--transition-duration-long);
		}
	}
</style>
