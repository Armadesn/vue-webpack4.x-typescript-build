<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <i class='el-icon-s-check'></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        :disabled="language==='zh'"
        command="zh"
      >
        中文
      </el-dropdown-item>
      <el-dropdown-item
        :disabled="language==='en'"
        command="en"
      >
        English
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { AppModule } from '../../store/modules/app'

@Component({
  name: 'Login'
})
export default class extends Vue {

    get language() {
        return AppModule.language
    }

    private handleSetLanguage(lang: string) {
        this.$i18n.locale = lang
        AppModule.SetLanguage(lang)
    }
}
</script>
<style lang='less'>
    .international{
        position: absolute;
        top:5px;
        right:20px;
        cursor: pointer;
        .el-icon-s-check {
            font-size: 20px;
            cursor: pointer;
        }
    }
</style>
