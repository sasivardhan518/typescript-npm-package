import { ArtifactDependencyType } from '../../shared-app-level/enums/artifact-dependency-type.enum';
import { ArtifactType } from '../../shared-app-level/enums/artifact-type.enum';

export interface ArtifactNode {
    artifactType: ArtifactType;
    artifactId: number | string;
    dependencyType: ArtifactDependencyType;
}
