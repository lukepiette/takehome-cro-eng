import { SqueezePage } from "@pages/ppc/[slug]";
import costEffective from "./cost-effective";
import easyToUse from "./easy-to-use";
import unlimitedScale from "./unlimited-scale";

export default {
	"cost-effective": costEffective,
	"easy-to-use": easyToUse,
	"unlimited-scale": unlimitedScale
} as Record<string, SqueezePage>;
