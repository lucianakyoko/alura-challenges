import { getMapLegends } from "@/datas/sectionMap";

import {
  MapSection,
  LegendItem
} from './style';

export function Map() {
  const legends = getMapLegends();

  return (
    <MapSection>
      <img src="/sectionMap/map.png" alt="Mapa dos setores" className="map" />

      <ul className="legends">
        <p className="title">Legenda:</p>
        {legends.map(legend => (
          <LegendItem key={legend.label} color={legend.color}>
            <span className="legend_color"></span>
            <span className="legend_label">{legend.label}</span>
          </LegendItem>
        ))}
      </ul>
    </MapSection>
  );
}