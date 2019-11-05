export interface DomainAttributesDependencies {
    domainId: number;
    rootAttributes: string[];
    attributeDependencies: AttributeDepedencies[];
}

export interface AttributeDepedencies {
    attributeName: string;
    dependentAttributes: string[];
    parentAttributes?: string[];
}

export interface DomainAttributeDependencies {
    domainId: number;
    rootAttributes: string[];
    attributeDependencies: AttributeDepedencies;
}
