import React from 'react';
import Svg from '../Svg/Svg';

type ExtraFeatureT = { name: string; filter?: string; isActive: boolean };

export default function ExtraFeature({ name, filter, isActive }: ExtraFeatureT) {
    if (!isActive) return null;
    return (
        <Svg
            className={filter} src={`./svg/features/${name}.svg`}
            alt={name}
        />
    );
}

ExtraFeature.defaultProps = {
    filter: '',
};
