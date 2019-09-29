<template xmlns:v-scope="http://www.w3.org/1999/XSL/Transform">
    <el-table
        :data="articles"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
            prop="title"
            label="标题"
            width="180">
        </el-table-column>
        <el-table-column
            prop="body"
            label="内容"
            width="180">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    @click="edit(scope.row._id)">编辑</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="remove(scope.row._id)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

<script>
    export default {
        name: 'listTree',
        data() {
            return {
                articles: []
            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex % 2 == 1) {
                    return 'warning-row';
                }
                return '';
            },
            fetch() {
                this.$http.get('articleList').then(res => {
                    this.articles = res.data
                    console.log(this.articles,',,,,,,,,,,,,,')
                })
            },
            // 编辑
            edit(id) {
                this.$router.push(`editTree/${id}`)
            },
            // 删除
            remove(id) {
                this.$http.delete(`articles/${id}`).then(res => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.fetch()
                })

            }
        },
        created() {
            this.fetch()
        }
    }
</script>