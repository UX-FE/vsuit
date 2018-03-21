<template>
    <div class="other">
        <div class="title1">
            Grid 栅格
        </div>
        <div class="mItem">
            <div class="title2">
                基础用法：
            </div>
            <div class="wrap">
                <Row>
                    <Col span="24"><div>24</div></Col>
                </Row>
                <br/>
                <Row>
                    <Col span="12"><div>12</div></Col>
                    <Col span="12"><div>12</div></Col>
                </Row>
                <br/>
                <Row>
                    <Col span="8"><div>8</div></Col>
                    <Col span="8"><div>8</div></Col>
                    <Col span="8"><div>8</div></Col>
                </Row>
                <br/>
                <Row>
                    <Col span="6"><div>6</div></Col>
                    <Col span="6"><div>6</div></Col>
                    <Col span="6"><div>6</div></Col>
                    <Col span="6"><div>6</div></Col>
                </Row>
                <br/>
                <Row>
                    <Col span="10"><div>10</div></Col>
                    <Col span="14"><div>14</div></Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    采用24栅格系统，将区域进行24划分。
                </div>
                <div class="q-title">代码示例：</div>
                <DCode :code="code.baseRowCol" lang="html"></DCode>
            </div>
            <div class="title2">
                分栏间隔：
            </div>
            <div class="wrap">
                <Row :gutter="16">
                    <Col span="6"><div>6</div></Col>
                    <Col span="6"><div>6</div></Col>
                    <Col span="6"><div>6</div></Col>
                    <Col span="6"><div>6</div></Col>
                </Row>
                <div class="q-title">说明：</div>
                <div>
                    通过给row增加gutter属性，给其下属col增加间隔
                </div>
                <div class="q-title">代码示例：</div>
                 <DCode :code="code.gutterRowCol" lang="html"></DCode>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '../../../code/component/base/grid';
export default {
  data() {
    return {
        code: Code
    };
  },
  methods: {
  },
  mounted() {}
};

</script>
<style lang="sass" scoped>
.vsu-col{
    div{
        height:40px;
        background:#4B61D9;
        border-radius:4px;
        text-align:center;
        color:#fff;
        font-size:14px;
        line-height:40px;
    }
    &:nth-child(odd){
        div{
            background:#8494ee;
        }
    }
}
</style>
