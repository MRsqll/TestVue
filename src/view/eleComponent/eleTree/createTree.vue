<template>
    <div>
        <el-col :span="14">
            <el-form @submit.native.prevent="saveArticle" :model="article" label-width="100px" class="demo-ruleForm">
                <el-form-item label="文章标题">
                    <el-input v-model="article.title"></el-input>
                </el-form-item>
                <el-form-item label="文章内容">
                    <el-input type="textarea" v-model="article.body"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </div>
</template>

<script>
    export default {
        name: "createTree",
        data() {
            return {
                article: {}
            }
        },
        methods: {
            saveArticle() {
                this.$http.post('articles',this.article).then(res => {
                    this.$message({
                        message: '创建成功',
                        type: 'success'
                    })
                    this.$router.push('listTree')
                })
            }
        }
    }
</script>

<style scoped>

</style>