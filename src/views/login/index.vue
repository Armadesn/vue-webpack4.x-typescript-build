<template>
    <div :class='prefixCls'>
        <el-form  :class="prefixCls + '-from'" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px">
            <div  :class="prefixCls + '-title'">
                <h3 class="title">
                    {{ $t('login.title') }}
                </h3>
            </div>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const prefixCls = 'login';
@Component({})
export default class extends Vue {
    private prefixCls = prefixCls
    private ruleForm =  {
        username: '',
        password: '',
    }
    private rules = {
        username:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
        ],
    }
    created() {
    }
}
</script>
<style lang='less'>
    .login{
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-color: #2d3a4b;
        &-from{
            position: relative;
            width: 520px;
            max-width: 100%;
            padding: 160px 35px 0;
            margin: 0 auto;
            overflow: hidden;
        }
        &-title{
            padding-bottom:20px;
            text-align: center;
            color: #fff;
        }
    }
</style>
