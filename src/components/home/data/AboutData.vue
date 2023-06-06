<script lang="ts" setup>
import CodeContent from '../../code/CodeContent.vue'

</script>

<template>
    <div class="about-data">
        <h1>MySql</h1>
        <p>MySQL是世界上排名第一的开源数据库,也是在Web应用方面排名第一的数据库，同时它也是一个优秀的嵌入式数据库。</p>

        <div class="section">
            <h2>1.数据定义语言-DDL</h2>
            <p>DDL主要包括数据库对象的创建(create)，删除(drop)和修改(alert)的操作。其中：</p>
            <div>
                <p>创建语句</p>
                <CodeContent>
                    <p class="pcode">CREATE TABLE table_name</p>
                </CodeContent>
            </div>
            <div>
                <p>删除语句</p>
                <CodeContent>
                    <p class="pcode">DROP TABLE table_name;</p>
                </CodeContent>
            </div>
            <div>
                <p>更新语句</p>
                <CodeContent>
                    <p class="pcode">ALTER TABLE table_name;</p>
                </CodeContent>
            </div>
        </div>

        <div class="section">
            <h2>2.数据操作语言-DML</h2>
            <p>DML也就是用来操作数据库中数据使用的语言，对数据库中的数据操纵无非是对数据进行增加，删除和修改。</p>
            <div>
                <p>插入语句</p>
                <CodeContent>
                    <p class="pcode">INSERT INTO table_name(column, ...) VALUES (data, ...)</p>
                </CodeContent>
            </div>
            <div>
                <p>修改语句</p>
                <CodeContent>
                    <p class="pcode">UPDATE table_name SET column=data, ...</p>
                </CodeContent>
            </div>
            <div>
                <p>删除语句</p>
                <CodeContent>
                    <p class="pcode">DELETE FROM table_name [where condition]</p>
                </CodeContent>
            </div>
            <div>
                <p>查询语句</p>
                <CodeContent>
                    <p class="pcode">SELECT column FROM table_name [where condition]</p>
                </CodeContent>
            </div>
        </div>

        <div class="section">
            <h2>3.MYSQL分页查询</h2>
            <p>在MySQL中，分页查询一般都是使用limit子句实现。limit子句声明如下：</p>
            <div>
                <CodeContent>
                    <p class="pcode">SELECT * FROM table LIMIT [offset,] rows | rows OFFSET offset</p>
                </CodeContent>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-data {

    h1 {
        font-weight: 700;
        font-size: 2rem;
    }

    .section {
        padding: 30px 0;
        border-bottom: 1px solid #aaa;

        h2 {
            padding: 5px 0;
        }

        p {
            margin: 10px 0;
        }

        img {
            height: 320px;
        }

        .pcode {
            color: #aaa;
        }
    }
}
</style>