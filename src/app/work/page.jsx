import React from "react";
import Breadcrumb from "../components/breadcrumb";

export default function Page() {
  return (
    <div>
      <Breadcrumb />
      Work
      <div className="h-[120vh] bg-amber-200">test div</div>
      <div id="cpt" className="h-[120vh] bg-neutral-500">
        test cpt div anchor
      </div>
    </div>
  );
}
