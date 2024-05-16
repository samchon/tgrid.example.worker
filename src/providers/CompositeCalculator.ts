import { Driver } from "tgrid";

import { ICalcConfig } from "../interfaces/ICalcConfig";
import { ICalcEventListener } from "../interfaces/ICalcEventListener";
import { ICompositeCalculator } from "../interfaces/ICompositeCalculator";
import { ScientificCalculator } from "./ScientificCalculator";
import { SimpleCalculator } from "./SimpleCalculator";
import { StatisticsCalculator } from "./StatisticsCalculator";

export class CompositeCalculator
  extends SimpleCalculator
  implements ICompositeCalculator
{
  public readonly scientific: ScientificCalculator;
  public readonly statistics: StatisticsCalculator;

  public constructor(
    config: ICalcConfig,
    listener: Driver<ICalcEventListener>,
  ) {
    super(config, listener);
    this.scientific = new ScientificCalculator(config, listener);
    this.statistics = new StatisticsCalculator(config, listener);
  }
}
