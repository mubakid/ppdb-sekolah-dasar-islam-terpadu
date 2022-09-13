import { A as AppLayout } from "./App.31ee7799.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main$1 = {
  __name: "CostCategory",
  __ssrInlineRender: true,
  props: {
    costs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button type="button" class="btn btn-oorange text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"> Check Category </button><hr><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable modal-xl"><div class="modal-content"><div class="modal-body"><table class="table"><thead><tr><th class="text-capitalize">name</th><th class="text-capitalize">gender</th><th class="text-capitalize">gedung</th><th class="text-capitalize"> perpustakaan </th><th class="text-capitalize">kegiatan</th><th class="text-capitalize">bukumedia</th><th class="text-capitalize">seragam</th><th class="text-capitalize">jilbab</th><th class="text-capitalize">ipp</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.costs, (c, index) => {
        _push(`<tr><td>${ssrInterpolate(c.name)}</td><td>${ssrInterpolate(c.gender)}</td><td>${ssrInterpolate(c.gedung)}</td><td>${ssrInterpolate(c.perpustakaan)}</td><td>${ssrInterpolate(c.kegiatan)}</td><td>${ssrInterpolate(c.bukumedia)}</td><td>${ssrInterpolate(c.seragam)}</td><td>${ssrInterpolate(c.jilbab)}</td><td>${ssrInterpolate(c.ipp)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/dashboard/CostCategory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Students_vue_vue_type_style_index_0_scoped_d66ec171_lang = "";
const _sfc_main = {
  layout: AppLayout,
  components: {
    CostCategory: _sfc_main$1
  },
  props: {
    costs: Object,
    students: Object,
    students_applied: Object
  },
  setup() {
    const form = {
      student_id: "",
      cost_category_id: ""
    };
    const submit = () => {
      Inertia.post(route("admin.cost.apply"), form);
    };
    return {
      form,
      submit
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CostCategory = resolveComponent("CostCategory");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0" }, _attrs))} data-v-d66ec171><div class="table-responsive bg-white rounded p-3 mb-3" data-v-d66ec171><p class="fs-4 m-0" data-v-d66ec171>Cost Re-Registration</p></div><div class="table-responsive bg-white rounded p-3 vh-100 position-relative" data-v-d66ec171>`);
  _push(ssrRenderComponent(_component_CostCategory, { costs: $props.costs }, null, _parent));
  _push(`<form data-v-d66ec171><div class="d-flex justify-content-center" data-v-d66ec171><select class="form-select mx-1" data-v-d66ec171><!--[-->`);
  ssrRenderList($props.students, (st) => {
    _push(`<option${ssrRenderAttr("value", st.id)} for="student" data-v-d66ec171>${ssrInterpolate(st.full_name)}</option>`);
  });
  _push(`<!--]--></select><select class="form-select mx-1" data-v-d66ec171><!--[-->`);
  ssrRenderList($props.costs, (cost) => {
    _push(`<option${ssrRenderAttr("value", cost.id)} data-v-d66ec171>${ssrInterpolate(cost.name)}</option>`);
  });
  _push(`<!--]--></select><input type="submit" class="btn btn-oorange mx-1" value="Apply" data-v-d66ec171></div></form><hr data-v-d66ec171><table class="table table-striped" data-v-d66ec171><thead data-v-d66ec171><tr data-v-d66ec171><th scope="col" data-v-d66ec171>No. Wa</th><th scope="col" data-v-d66ec171>Nama</th><th scope="col" data-v-d66ec171>Kategori Biaya</th></tr></thead><tbody data-v-d66ec171><!--[-->`);
  ssrRenderList($props.students_applied, (item, index) => {
    _push(`<tr data-v-d66ec171><td data-v-d66ec171>${ssrInterpolate(item.wa)}</td><td data-v-d66ec171>${ssrInterpolate(item.name)}</td><td data-v-d66ec171>${ssrInterpolate(item.cost)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Cost/Students.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Students = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d66ec171"]]);
export {
  Students as default
};
