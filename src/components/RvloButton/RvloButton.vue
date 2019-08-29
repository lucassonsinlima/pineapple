<template>
  <router-link v-if="routeTo"
               class="button"
               :class="[variantClass, sizeClass, fullWidthClass]"
               :to="routeTo"
               :disabled="disabled"
               @click="$emit('click', $event)"
  >
    <slot v-if="!title"></slot>
    {{title}}
  </router-link>
  <a
    v-else-if="aHref"
    :href="aHref"
    class="button"
    :class="[variantClass, sizeClass, fullWidthClass]"
    :disabled="disabled"
    @click="$emit('click', $event)">
    <slot v-if="!title"></slot>
    {{title}}
  </a>
  <button v-else
          class="button"
          v-bind:class="[variantClass, sizeClass, fullWidthClass]"
          :disabled="disabled"
          @click="$emit('click', $event)"
  >
    <slot v-if="!title"></slot>
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    title: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return [
          'primary',
          'ghost',
          'ghost-darkest',
          'common',
          'tertiary'
        ].includes(value)
      }
    },
    size: {
      type: String,
      default: 'large',
      validator: function (value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    routeTo: {
      type: Object,
      default: null
    },
    aHref: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantClass () { return `button--${this.variant}` },
    sizeClass () { return `button--${this.size}` },
    fullWidthClass () {
      return this.fullWidth ? 'button--full-width' : 'button--auto-width'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/themes/theme';
@import '../assets/themes/tokens';

.button {
  align-items: center;
  border-color: currentColor;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 2*$base 4*$base;
  text-align: center;
  text-decoration: none;

  &:hover {
    @include layer($white, 0.15);
  }

  &:focus {
    @include layer($white, 0.15);

    outline: none;
  }

  &:disabled {
    @include layer($white, 0.8);

    border: none;
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.98);
  }

  &--primary {
    background-color: $red;
    border-color: $red;
    color: $white;

    &:hover {
      color: $white;
    }
  }

  &--ghost {
    background-color: $white;
    color: $red;

    &:hover {
      @include layer($red, 0.15);

      color: $red;
    }

    &:focus {
      @include layer($red, 0.15);

      outline: none;
    }

    &:disabled {
      border: solid 1px $red-lightest;
      color: $red-lightest;
      cursor: not-allowed;
    }
  }

  &--ghost-darkest {
    background-color: $white;
    color: $gray-darkest;

    &:hover {
      @include layer($gray-darkest, 0.15);

      color: $gray-darkest;
    }

    &:focus {
      @include layer($gray-darkest, 0.15);

      outline: none;
    }

    &:disabled {
      border: solid 1px $gray-darkest;
      color: $gray-darkest;
      cursor: not-allowed;
    }
  }

  &--common {
    background-color: $white;
    border-color: $gray-lighter;
    color: $gray-darker;
  }

  &--tertiary {
    background: none;
    border: none;
    color: $gray-darkest;
  }

  &--large {
    @extend %button1;

    height: 48px;
  }

  &--medium {
    @extend %button1;
  }

  &--small {
    @extend %button2;
  }

  &--full-width {
    width: 100%;
  }

  &--auto-width {
    display: inline-block;
    width: auto;
  }
}
</style>
