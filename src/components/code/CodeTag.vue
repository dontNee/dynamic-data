<script lang="ts" setup>

const props = defineProps({
    // 标签名称
    tag: {
        type: String,
        default() {
            return ""
        }
    },
    // 属性列表
    attrs: {
        type: Object,
        default() {
            return {}
        }
    }
})
</script>

<template>
    <div class="code-tag">
        <p>
            <span class="punctuation">&lt;</span>
            <span class="tag">{{ props.tag }}</span>
            <span v-for="(value, key) in attrs" class="attrs">
                <span class="attr-name">
                    {{ key }}
                </span>
                <span class="equals">
                    =
                </span>
                <span class="punctuation">"</span>
                <span v-if="value.length == undefined">
                    <span v-for="(propertyValue, propertyKey) in value" class="property">
                        <span>{{ propertyKey }}:</span>
                        <span class="property-value">{{ propertyValue }};</span>
                    </span>
                </span>
                <span v-else class="attr-value">
                    {{ value }}
                </span>
                <span class="punctuation">"</span>
            </span>
            <span class="punctuation">></span>
        </p>
        <p class="tag-content">
            <slot></slot>
        </p>
        <p>
            <span class="punctuation">&lt;/</span>
            <span class="tag">{{ props.tag }}</span>
            <span class="punctuation">></span>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.code-tag {

    .punctuation, .equals {
        color: #89ddff;
    }

    .tag {
        color: #f07178;
    }

    .attrs {
        padding: 0 10px;
        .attr-name {
            color: #ffcb6b;
        }

        .attr-value {
            color: #c3e88d;
        }

        .property {
            color: #80cbc4;
        }

        .property-value {
            color: #c3e88d;
            padding: 0 3px;
        }
    }

    .tag-content {

        text-indent: 2rem;
        color: #c3cee3;
    }
}
</style>