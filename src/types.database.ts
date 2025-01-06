export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      experiment_params: {
        Row: {
          created_at: string;
          experiment_id: string;
          fixed_value: string | null;
          is_variable: boolean;
          param_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          experiment_id: string;
          fixed_value?: string | null;
          is_variable: boolean;
          param_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          experiment_id?: string;
          fixed_value?: string | null;
          is_variable?: boolean;
          param_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "experiment_params_experiment_id_fkey";
            columns: ["experiment_id"];
            isOneToOne: false;
            referencedRelation: "experiments";
            referencedColumns: ["experiment_id"];
          },
          {
            foreignKeyName: "experiment_params_param_id_fkey";
            columns: ["param_id"];
            isOneToOne: false;
            referencedRelation: "params";
            referencedColumns: ["param_id"];
          }
        ];
      };
      experiments: {
        Row: {
          created_at: string;
          description: string | null;
          experiment_id: string;
          name: string;
          project_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          experiment_id?: string;
          name: string;
          project_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          experiment_id?: string;
          name?: string;
          project_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "experiments_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "projects";
            referencedColumns: ["project_id"];
          }
        ];
      };
      images: {
        Row: {
          created_at: string;
          experiment_id: string;
          image_id: string;
          review_status: Database["public"]["Enums"]["review_status"];
          reviewed_at: string | null;
          reviewed_by: string | null;
          storage_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          experiment_id: string;
          image_id?: string;
          review_status?: Database["public"]["Enums"]["review_status"];
          reviewed_at?: string | null;
          reviewed_by?: string | null;
          storage_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          experiment_id?: string;
          image_id?: string;
          review_status?: Database["public"]["Enums"]["review_status"];
          reviewed_at?: string | null;
          reviewed_by?: string | null;
          storage_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "images_experiment_id_fkey";
            columns: ["experiment_id"];
            isOneToOne: false;
            referencedRelation: "experiments";
            referencedColumns: ["experiment_id"];
          }
        ];
      };
      masks: {
        Row: {
          created_at: string;
          created_with: string;
          image_id: string;
          mask_id: string;
          storage_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          created_with: string;
          image_id: string;
          mask_id?: string;
          storage_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          created_with?: string;
          image_id?: string;
          mask_id?: string;
          storage_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "masks_image_id_fkey";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "images";
            referencedColumns: ["image_id"];
          }
        ];
      };
      params: {
        Row: {
          created_at: string;
          data_type: string;
          description: string | null;
          name: string;
          param_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          data_type: string;
          description?: string | null;
          name: string;
          param_id?: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          data_type?: string;
          description?: string | null;
          name?: string;
          param_id?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          created_at: string;
          description: string | null;
          name: string;
          project_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          name: string;
          project_id?: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          name?: string;
          project_id?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      results: {
        Row: {
          created_at: string;
          mask_id: string;
          ratio_target: number | null;
          ratio_total: number;
          result_type: Database["public"]["Enums"]["result_type"];
          slice_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          mask_id: string;
          ratio_target?: number | null;
          ratio_total: number;
          result_type: Database["public"]["Enums"]["result_type"];
          slice_id: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          mask_id?: string;
          ratio_target?: number | null;
          ratio_total?: number;
          result_type?: Database["public"]["Enums"]["result_type"];
          slice_id?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "results_mask_id_fkey";
            columns: ["mask_id"];
            isOneToOne: false;
            referencedRelation: "masks";
            referencedColumns: ["mask_id"];
          },
          {
            foreignKeyName: "results_slice_id_fkey";
            columns: ["slice_id"];
            isOneToOne: false;
            referencedRelation: "slices";
            referencedColumns: ["slice_id"];
          }
        ];
      };
      sets: {
        Row: {
          created_at: string;
          set_id: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          set_id?: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          set_id?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      slice_params: {
        Row: {
          created_at: string;
          param_id: string;
          slice_id: string;
          updated_at: string | null;
          value: string;
        };
        Insert: {
          created_at?: string;
          param_id: string;
          slice_id: string;
          updated_at?: string | null;
          value: string;
        };
        Update: {
          created_at?: string;
          param_id?: string;
          slice_id?: string;
          updated_at?: string | null;
          value?: string;
        };
        Relationships: [
          {
            foreignKeyName: "slice_params_param_id_fkey";
            columns: ["param_id"];
            isOneToOne: false;
            referencedRelation: "params";
            referencedColumns: ["param_id"];
          },
          {
            foreignKeyName: "slice_params_slice_id_fkey";
            columns: ["slice_id"];
            isOneToOne: false;
            referencedRelation: "slices";
            referencedColumns: ["slice_id"];
          }
        ];
      };
      slices: {
        Row: {
          bbox_x1: number;
          bbox_x2: number;
          bbox_y1: number;
          bbox_y2: number;
          created_at: string;
          grid_idx: number;
          image_id: string;
          is_excluded: boolean | null;
          set_id: string | null;
          slice_id: string;
          slice_type: Database["public"]["Enums"]["slice_type"];
          updated_at: string | null;
        };
        Insert: {
          bbox_x1: number;
          bbox_x2: number;
          bbox_y1: number;
          bbox_y2: number;
          created_at?: string;
          grid_idx: number;
          image_id: string;
          is_excluded?: boolean | null;
          set_id?: string | null;
          slice_id?: string;
          slice_type: Database["public"]["Enums"]["slice_type"];
          updated_at?: string | null;
        };
        Update: {
          bbox_x1?: number;
          bbox_x2?: number;
          bbox_y1?: number;
          bbox_y2?: number;
          created_at?: string;
          grid_idx?: number;
          image_id?: string;
          is_excluded?: boolean | null;
          set_id?: string | null;
          slice_id?: string;
          slice_type?: Database["public"]["Enums"]["slice_type"];
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "slices_image_id_fkey";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "images";
            referencedColumns: ["image_id"];
          },
          {
            foreignKeyName: "slices_set_id_fkey";
            columns: ["set_id"];
            isOneToOne: false;
            referencedRelation: "sets";
            referencedColumns: ["set_id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      trigger_updated_at: {
        Args: {
          tablename: unknown;
        };
        Returns: undefined;
      };
    };
    Enums: {
      result_type: "copper" | "heartwood";
      review_status: "pending" | "ongoing" | "reviewed";
      slice_type: "copper" | "heartwood";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};



type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
