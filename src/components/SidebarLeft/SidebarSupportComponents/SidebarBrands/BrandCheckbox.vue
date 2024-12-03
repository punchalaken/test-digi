<script setup>
defineProps(['id', 'value'])
</script>

<template>
    <div class="brand__wrapper">
        <div class="checkbox-wrapper">
            <input type="checkbox" :id="`check${id}`" />
            <label :for="`check${id}`"></label>
            <span>{{ value }}</span>
        </div>
        <span class="brand__number">3</span>
    </div>
</template>

<style lang="scss" scoped>
.brand__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 1rem;

    .checkbox-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        input {
            display: none;

            &:checked + label {
                background-color: var(--checkbox-hober-sidebar);
                border-color: var(--checkbox-hober-sidebar);
            }

            &:checked + label::before {
                content: url('/src/assets/images/checkbox.svg');
            }
        }

        label {
            width: 20px;
            height: 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 2px solid #ccc;
            border-radius: 4px;
            cursor: pointer;

            transition:
                background-color 0.2s,
                border-color 0.2s;

            &:hover {
                border-color: var(--checkbox-hober-sidebar);
            }
        }
        .brand__number {
            color: var(--irrelevant-info);
        }
    }
}
</style>
